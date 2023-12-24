import { v4 } from "uuid";

const notes = [
    {
        title: "Note 1 title",
        content: "Note 1 content",
        tags: [{ tag: "coding", id: v4() }],
        color: "#ffffcc",
        priority: "high",
        isPinned: true,
        isRead: false,
        date: "24/12/23 3:00 PM",
        createdTime: new Date("Sun Dec 24  2023 15:00:00").getTime(),
        editedTime: null,
        id: v4(),
    },
    {
        title: "Note 2 title",
        content: "Note 2 content",
        tags: [{ tag: "exercise", id: v4() }],
        color: "#ffcccc",
        priority: "high",
        isPinned: false,
        isRead: false,
        date: "24/12/23 3:01 PM",
        createdTime: new Date("Sun Dec 24  2023 15:01:00").getTime(),
        editedTime: null,
        id: v4(),
    },
    {
        title: "Note 3 title",
        content: "Note 3 content",
        tags: [{ tag: "quotes", id: v4() }],
        color: "#ccffcc",
        priority: "high",
        isPinned: false,
        isRead: false,
        date: "24/12/23 3:02 PM",
        createdTime: new Date("Sun Dec 24  2023 15:02:00").getTime(),
        editedTime: null,
        id: v4(),
    },
];

export default notes;
