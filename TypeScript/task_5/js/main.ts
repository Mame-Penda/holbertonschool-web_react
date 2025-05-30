interface MajorCredits {
    credits: number;
    brand: 'MajorCredits';
}

interface MinorCredits {
    credits: number;
    brand: 'MinorCredits';
};

const MajorCredits = (credits: number): MajorCredits => {
    return {
        credits,
        brand: 'MajorCredits',
    };
};

const MinorCredits = (credits: number): MinorCredits => {
    return {
        credits,
        brand: 'MinorCredits',
    };
};

function sumMajorCredits(subject1: MajorCredits, subjects2: MajorCredits): MajorCredits {
    return MajorCredits(subject1.credits + subjects2.credits);
}

function sumMinorCredits(subject1: MinorCredits, subjects2: MinorCredits): MinorCredits {
    return MinorCredits(subject1.credits + subjects2.credits);
}   