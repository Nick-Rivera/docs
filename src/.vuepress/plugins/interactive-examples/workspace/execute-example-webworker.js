import { executeExample } from "./execute-example";
import registerPromiseWorker from "promise-worker/register";

registerPromiseWorker(function(parsedExample) {
  return executeExample(parsedExample);
});
