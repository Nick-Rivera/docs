import PromiseWorker from "promise-worker";
import ExecuteHandlebarsWorker from "!worker-loader!./execute-example-webworker";

const HANDLEBARS_EXECUTION_LIMIT_MILLIS = 2000;

let executeHandlebarsWorker;
let promiseWorker;

recreateWebWorker();

/**
 * Return the output of the example
 */
export async function executeExample(example) {
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
