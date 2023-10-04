const handleJSONFromClipboard = async (callback) =>
  navigator.clipboard.readText().then((copiedText) => {
    try {
      const json = JSON.parse(copiedText);
      callback(json);
    } catch (error) {
      console.error(error);
    }
  });

export default handleJSONFromClipboard;
