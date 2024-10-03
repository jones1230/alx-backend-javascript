export default function loadBalancer(chinaDownload, USDownlaod) {
  return Promise.race([chinaDownload, USDownlaod])
    .then((res) => res);
}
