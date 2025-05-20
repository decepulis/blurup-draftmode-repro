import { createBlurUp } from "./blurup";

/** Add your relevant code here for the issue to reproduce */
export default async function Reproduction() {
  const response = await createBlurUp();
  return <p>{JSON.stringify(response, null, 2)}</p>;
}
