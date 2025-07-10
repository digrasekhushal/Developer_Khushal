// Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Cart Modal Toggle
        const cartIcon = document.getElementById('cart-icon');
        const cartModal = document.getElementById('cart-modal');
        const closeCart = document.getElementById('close-cart');
        
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            cartModal.classList.remove('hidden');
        });
        
        closeCart.addEventListener('click', () => {
            cartModal.classList.add('hidden');
        });

        // Click outside cart to close
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.add('hidden');
            }
        });

        // Shopping Cart Functionality
        const cartItemsContainer = document.getElementById('cart-items');
        const emptyCartMessage = document.getElementById('empty-cart-message');
        const cartSummary = document.getElementById('cart-summary');
        const cartCount = cartIcon.querySelector('span');
        let cart = [];

        // Sample add to cart functionality
        document.querySelectorAll('.product-card button').forEach(button => {
            button.addEventListener('click', () => {
                const productCard = button.closest('.product-card');
                const productName = productCard.querySelector('h3').textContent;
                const productPrice = parseFloat(productCard.querySelector('.text-green-600').textContent.replace('$', ''));
                const productImage = productCard.querySelector('img').src;
                
                // Check if product already in cart
                const existingItem = cart.find(item => item.name === productName);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        name: productName,
                        price: productPrice,
                        image: productImage,
                        quantity: 1
                    });
                }
                
                updateCart();
                cartModal.classList.remove('hidden');
            });
        });

        function updateCart() {
            // Update cart count
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            // Update cart items display
            if (cart.length === 0) {
                emptyCartMessage.classList.remove('hidden');
                cartSummary.classList.add('hidden');
                cartItemsContainer.innerHTML = '';
                cartItemsContainer.appendChild(emptyCartMessage);
            } else {
                emptyCartMessage.classList.add('hidden');
                cartSummary.classList.remove('hidden');
                
                let itemsHTML = '';
                let subtotal = 0;
                
                cart.forEach((item, index) => {
                    subtotal += item.price * item.quantity;
                    itemsHTML += `
                        <div class="cart-item flex items-start border-b border-gray-200 pb-4 pt-2">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded mr-4">
                            <div class="flex-1">
                                <h3 class="font-medium">${item.name}</h3>
                                <div class="flex justify-between items-center mt-2">
                                    <div class="flex items-center border border-gray-300 rounded">
                                        <button class="quantity-btn px-2 py-1" data-index="${index}" data-action="decrease">-</button>
                                        <span class="px-2">${item.quantity}</span>
                                        <button class="quantity-btn px-2 py-1" data-index="${index}" data-action="increase">+</button>
                                    </div>
                                    <span class="font-semibold">$${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                            <button class="remove-btn ml-2 text-gray-500 hover:text-red-500" data-index="${index}">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    `;
                });
                
                cartItemsContainer.innerHTML = itemsHTML;
                document.querySelector('.cart-summary .font-semibold').textContent = `$${subtotal.toFixed(2)}`;
                document.querySelector('.text-lg.font-bold span:last-child').textContent = `$${subtotal.toFixed(2)}`;
                
                // Add event listeners to quantity buttons
                document.querySelectorAll('.quantity-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const index = parseInt(this.getAttribute('data-index'));
                        const action = this.getAttribute('data-action');
                        
                        if (action === 'increase') {
                            cart[index].quantity += 1;
                        } else if (action === 'decrease') {
                            if (cart[index].quantity > 1) {
                                cart[index].quantity -= 1;
                            } else {
                                cart.splice(index, 1);
                            }
                        }
                        
                        updateCart();
                    });
                });
                
                // Add event listeners to remove buttons
                document.querySelectorAll('.remove-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const index = parseInt(this.getAttribute('data-index'));
                        cart.splice(index, 1);
                        updateCart();
                    });
                });
            }
        }