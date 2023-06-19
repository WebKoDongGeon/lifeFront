export type BoardType = {
    boardNo: number;
    company: string;
    title: string;
    content: string;
    skill: string;
    startProject: string;
    endProject: string;
    userId: string;
    originalImageName: string;
    regDt: string;
}

export type BoardListType = {
    boardNo: number;
    title: string;
    userId: string;
    regDt: string;
}



export type BoardSaveType = {
    title: string;
    content: string;
    image: File | null;
    userId: string;
    regDt: string;
}