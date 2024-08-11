declare global {
    interface WindowEventMap {
      "eip6963:announceProvider": CustomEvent
    }
  }
  
  // Connect to the selected provider using eth_requestAccounts.
  const connectWithProvider = async (
    wallet: EIP6963AnnounceProviderEvent["detail"]
  ) => {
    try {
      var accounts = await wallet.provider.request({ method: "eth_requestAccounts" });
      console.log("Accounts", wallet.provider);
    } catch (error) {
      console.error("Failed to connect to provider:", error)
    }
  }
  
  // Display detected providers as connect buttons.
  export function listProviders(element: HTMLElement) {
    window.addEventListener(
      "eip6963:announceProvider",
      (event: EIP6963AnnounceProviderEvent) => {
        if (document.getElementById(event.detail.info.name)) {
            return;
        }

        const wrapper = document.createElement("div");
        wrapper.classList.add("connect-wrapper");
        wrapper.id = event.detail.info.name;

        const div = document.createElement("div");
        div.classList.add("connect-details");
        div.innerHTML = `
          <img src="${event.detail.info.icon}" alt="${event.detail.info.name}" width="22" />
          <div>${event.detail.info.name}</div>
        `;
        wrapper.appendChild(div);

        const button = document.createElement('button');
        button.innerText = "Connect";
        button.classList.add("connect-button");
        button.onclick = () => connectWithProvider(event.detail);
        wrapper.appendChild(button);

        element.prepend(wrapper);
      }
    )
  
    // Notify event listeners and other parts of the dapp that a provider is requested.
    window.dispatchEvent(new Event("eip6963:requestProvider"));
  }