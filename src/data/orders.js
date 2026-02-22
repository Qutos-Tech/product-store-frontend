export const mockOrders = [
    {
        _id: "ORD001",
        customerDetails: {
            name: "John Doe",
            email: "john@example.com",
            phone: "9876543210"
        },
        items: [
            { productId: 101, productName: "Organic Bananas", price: 60, quantity: 2 }
        ],
        totalAmount: 120,
        status: "Pending",
        createdAt: "2024-02-20T10:00:00Z"
    },
    {
        _id: "ORD002",
        customerDetails: {
            name: "Jane Smith",
            email: "jane@example.com",
            phone: "9988776655"
        },
        items: [
            { productId: 103, productName: "Almond Milk", price: 120, quantity: 1 },
            { productId: 104, productName: "Brown Bread", price: 45, quantity: 2 }
        ],
        totalAmount: 210,
        status: "Completed",
        createdAt: "2024-02-21T14:30:00Z"
    },
    {
        _id: "ORD003",
        customerDetails: {
            name: "Rahul Kumar",
            email: "rahul@example.com",
            phone: "8877665544"
        },
        items: [
            { productId: 105, productName: "Dark Chocolate", price: 150, quantity: 3 }
        ],
        totalAmount: 450,
        status: "Pending",
        createdAt: "2024-02-22T09:15:00Z"
    }
];
