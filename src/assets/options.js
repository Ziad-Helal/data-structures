const dataStructures = [
    {
        name: "stack",
        operations: [
            {
                name: "push",
                disabled: false,
            },
            {
                name: "pop",
                disabled: false,
            },
            {
                name: "insert",
                using: [
                    {
                        name: "stack",
                        disabled: false,
                    },
                    {
                        name: "queue",
                        disabled: true,
                    },
                    {
                        name: "linked list",
                        disabled: true,
                    },
                ],
                disabled: true,
            },
            {
                name: "clear",
                disabled: false,
            },
        ],
        disabled: false,
    },
    {
        name: "queue",
        operations: [
            {
                name: "enqueue",
                disabled: true,
            },
            {
                name: "dequeue",
                disabled: true,
            },
            {
                name: "insert",
                disabled: true,
            },
            {
                name: "clear",
                disabled: true,
            },
        ],
        disabled: true,
    },
    {
        name: "linked list",
        operations: [],
        disabled: true,
    },
];

export default dataStructures;
