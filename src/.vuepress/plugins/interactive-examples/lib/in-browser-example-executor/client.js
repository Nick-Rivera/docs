import PromiseWorker from "promise-worker";
import ExecuteHandlebarsWorker from "worker-loader?inline&fallback!./worker";
import debounce from "debounce-promise";

const HANDLEBARS_EXECUTION_LIMIT_MILLIS = 1000;

let executeHandlebarsWorker;
let promiseWorker;

recreateWebWorker();

/**
 * Return the output of the example
 */
export async function executeExample(example) {
  return executeExampleDebounced(example);
}

const executeExampleDebounced = debounce(executeExampleNow, HANDLEBARS_EXECUTION_LIMIT_MILLIS, { leading: true });

function executeExampleNow(example) {
  let promiseWorkerDone = false;

  let terminateStaleWorkerPromise = new Promise((resolve, reject) =>
    setTimeout(() => {
      if (!promiseWorkerDone) {
        recreateWebWorker();
        reject(
          new Error(
            `Example execution terminated after ${HANDLEBARS_EXECUTION_LIMIT_MILLIS} milliseconds. Is there an endless-loop somewhere?`
          )
        );
      } else {
        resolve();
      }
    }, HANDLEBARS_EXECUTION_LIMIT_MILLIS)
  );

  let workerPromise = promiseWorker.postMessage(example).then(
    result => {
      promiseWorkerDone = true;
      return result;
    },
    error => {
      promiseWorkerDone = true;
      throw error;
    }
  );

  return Promise.race([terminateStaleWorkerPromise, workerPromise]);
}

function recreateWebWorker() {
  if (executeHandlebarsWorker != null) {
    console.log("Terminating stalled Handlebars-worker");
    executeHandlebarsWorker.terminate();
  }
  executeHandlebarsWorker = new ExecuteHandlebarsWorker();
  promiseWorker = new PromiseWorker(executeHandlebarsWorker);
}
