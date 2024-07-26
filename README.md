# Proxy Toggle Chrome Extension for AnyOne Network

This Chrome extension allows users to toggle a SOCKS5 proxy on and off with a simple click. The extension icon changes to indicate the current state of the proxy, providing a visual indicator for users.

## Features

- Toggle a SOCKS5 proxy on and off.
- Visual indicator for proxy status (ON/OFF).

## Installation

1. Clone the repository or download the files.

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" using the toggle in the top right corner.

4. Click "Load unpacked" and select the folder containing the extension files.

## Usage

- Click the extension icon to toggle the proxy on or off.
- The icon will change to indicate the current state:
  - ![icon-on.png](icon-on.png) Proxy ON
  - ![icon-off.png](icon-off.png) Proxy OFF

## Files

- `manifest.json` : Contains metadata about the extension.
- `background.js` : Manages the proxy settings and extension state.
- `popup.html` : The HTML file for the extension popup.
- `popup.js` : The JavaScript file for the popup, handling user interaction.
- `icon-on.png` : The icon displayed when the proxy is ON.
- `icon-off.png` : The icon displayed when the proxy is OFF.

## Disclaimer

This project is created for the AnyOne network, a privacy DePIN project. However, I am not associated with anyone.io. This extension is provided "as is" without any warranty, and the developer is not responsible for any issues arising from its use. 

## About AnyOne Network

The AnyOne Protocol enables any application to run on a decentralized privacy network, ensuring universal privacy powered by DePIN. By contributing bandwidth and running relays, users can earn rewards while enhancing the network's privacy and performance. The network utilizes incentivized onion-routing to create secure, multi-hop encrypted circuits tailored to user needs.

For more information, visit [anyone.io](https://www.anyone.io).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

