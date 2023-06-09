export type BoardType = {
    id: number;
    title: string;
    content: string;
    userId: string;
    fileImage: string;
    regDt: string;
}


export type BoardSaveType = {
    title: string;
    content: string;
    image: File | null;
    userId: string;
    regDt: string;
}