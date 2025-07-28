export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  emotion: string;
  image: string;
  personalization?: string;
}

export class CartManager {
  private static instance: CartManager;
  private items: CartItem[] = [];
  private listeners: (() => void)[] = [];

  private constructor() {
    // Load cart from localStorage on initialization
    this.loadCart();
  }

  public static getInstance(): CartManager {
    if (!CartManager.instance) {
      CartManager.instance = new CartManager();
    }
    return CartManager.instance;
  }

  public addItem(item: Omit<CartItem, 'quantity'>, quantity: number = 1): void {
    const existingItem = this.items.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...item, quantity });
    }
    
    this.saveCart();
    this.notifyListeners();
  }

  public removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
    this.saveCart();
    this.notifyListeners();
  }

  public updateQuantity(id: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeItem(id);
      return;
    }

    const item = this.items.find(cartItem => cartItem.id === id);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
      this.notifyListeners();
    }
  }

  public getItems(): CartItem[] {
    return [...this.items];
  }

  public getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  public getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  public clearCart(): void {
    this.items = [];
    this.saveCart();
    this.notifyListeners();
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener());
  }

  private saveCart(): void {
    try {
      localStorage.setItem('cart', JSON.stringify(this.items));
    } catch (error) {
      console.warn('Failed to save cart to localStorage:', error);
    }
  }

  private loadCart(): void {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.items = JSON.parse(savedCart);
      }
    } catch (error) {
      console.warn('Failed to load cart from localStorage:', error);
      this.items = [];
    }
  }
}

export const cartManager = CartManager.getInstance();