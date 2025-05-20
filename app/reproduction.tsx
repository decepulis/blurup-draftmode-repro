import { createBlurUp } from "./blurup";

const options = {};
const muxPlaybackId = "O6LdRc0112FEJXH00bGsN9Q31yu5EIVHTgjTKRkKtEq1k";

/** Add your relevant code here for the issue to reproduce */
export default async function Reproduction() {
  const response = await createBlurUp();
  return <p>{JSON.stringify(response, null, 2)}</p>;
}
