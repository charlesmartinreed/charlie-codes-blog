export function handleSharing(destination) {
  function writeToClipboard(text) {
    navigator.clipboard.writeText(text).then(
      () => {
        // TODO: ADD SOME ACTUAL ALERTS
        alert(`${text} was saved to clipboard!`);
      },
      () => {
        console.error("Permission to the clipboard was denied.");
        return;
      }
    );
  }

  function shareToSocial(destination) {
    alert(`Sharing to ${destination} was triggered`);
  }

  switch (destination) {
    case "web":
      writeToClipboard(window.location.href);
      break;
    case "twitter":
    case "facebook":
      shareToSocial(destination);
      break;
    default:
      break;
  }
}
