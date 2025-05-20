export async function createBlurUp() {
  // slashed down version of https://github.com/muxinc/blurup/blob/main/blurup.js
  const imageURL = new URL(
    `https://image.mux.com/O6LdRc0112FEJXH00bGsN9Q31yu5EIVHTgjTKRkKtEq1k/thumbnail.webp`
  );
  const fetchOptions = { headers: { Accept: `image/webp` } };
  const response = await fetch(imageURL, fetchOptions);
  await imageDimensionsFromStream(response.body);
  return "success";
}

async function imageDimensionsFromStream(stream) {
  let chunks = [];

  for await (const chunk of stream) {
    console.log(chunk);
    chunks = [...chunks, ...chunk];
    return { width: 1280, height: 720 };
  }
}
export default createBlurUp;
