async function getIPLocation() {
    try {
        // Using a free, public IP geolocation API
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching location data:", error);
        return null;
    }
}

async function revealDeliveryCheckoutForColoradoSprings() {
    const checkoutButton = document.getElementById('stripe-checkout');
    const message = document.getElementById('delivery-message');
    if (!checkoutButton) return;

    const data = await getIPLocation();
    const city = (data && data.city || '').trim().toLowerCase();
    const region = (data && data.region || '').trim().toLowerCase();
    const isColoradoSprings = city === 'colorado springs' && region === 'colorado';

    if (isColoradoSprings) {
        checkoutButton.style.display = '';
    } else if (message) {
        message.style.display = '';
    }
}

revealDeliveryCheckoutForColoradoSprings();

