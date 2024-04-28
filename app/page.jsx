import Link from 'next/link';


const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
Emirates Airlines, headquartered in Dubai is one of the global carriers that is very popular for its highly luxurious style of flying and its superior-to-the-rest services. 
`;

const preDynamicContentExplainer = `
Apart from Emirates which was established in 1985, the airline is now-a-days regarded as the biggest global powerhouse that links millions of passengers with more than 150 destinations around 6 continents (Rawashdeh et al., 2022).
`;

const postDynamicContentExplainer = `
The mission of Emirates Airlines is to continuously strive to become the international forefront of superlative air travel by realizing its ultimate objective of delivering unmatched standards of quality, safety, and comfort to all its passengers. The goal of this company is to be consistently setting new standards of excellence by showcasing innovation, streamlining operations, and always staying focused on the customer’s needs (AL Naqeeb et al., 2023).
Vision Of the Emirates Airlines
Emirates intends to be ahead of many rivals in the airline industry worldwide and to establish the level of luxury, innovations and perfection among them. This company continues to aspire to further develop the quality of its services, enlarge its area of operation worldwide, and maintain its brand name as a standard for the first-class travel in the air (Taneja et al., 2023).
Objectives of the Performance Management Process
Emirates Airlines considers that putting a robust performance management system in place is essential to materializing its strategic goals and remaining in the lead in the aeronautics sector. The primary objectives of the performance management process include: The primary objectives of the performance management process include:
-	Enhancing Employee Performance: The aim of the performance management process is to position and align the employees so that they can perform well in their functions, through setting clear performance standards, providing timely feedback and creating route for skills development and career advancement.
-	Aligning Individual and Corporate Goals: Through setting SMART goals (i.e. specific, measurable, achievable, relevant and time-bound goals) the performance management system guarantees its employees objectives complement the strategic targets of the company and thus facilitates the development of a culture of accountability and goal attainment.
-	Identifying Training and Development Needs: An approach that enables Emirates to measure employees' performance during the year and give the required feedback is performance appraisal. This way, the organization becomes in a position to identify the strengths and areas of improvement of its employees, and hence, provides employees with training programs, which aid to improve their skills and competencies (Vide et al., 2023).
-	Rewarding and Recognizing Performance: It is the role of the performance management process to ensure equal and fair acknowledgement of the timeline workers’ contributions. The process is thus assisting in rewarding merit, granting employee incentives and granting opportunity for career advancements; thereby encouraging a culture of performance excellence and enthusing employees (Murphy, 2020).

`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <ContextAlert />
                <h1 className="mb-0">Emirates Airlines</h1>
                <p className="text-lg">FLY EMIRATES</p>
                <Link
                    href="https://drive.usercontent.google.com/uc?id=1kgzJGxrebAh1OXIQlwJBn22Xvw0_kZSv&export=download"
                    className="btn btn-lg btn-primary sm:btn-wide"
                >
                    Read the Docs
                </Link>
                
                 <h1 className="text-lg">Student Names:</h1>
                 <p className="text-lg">Aisha, Mohammed Salman, Sultan Taher, Sultan Taher, Sultan Alhajri</p>
                 
                
</section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fsearch%3Fq%3Demirates%2Bairline&psig=AOvVaw2_9eH8LJYR-7ZPokmTlTfP&ust=1714371304392000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDhzfeg5IUDFQAAAAAdAAAAABAJ" />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emirates.com%2Fus%2Fenglish%2Fbefore-you-fly%2Fcorporate-travel%2Ffly-america-act%2F&psig=AOvVaw2_9eH8LJYR-7ZPokmTlTfP&ust=1714371304392000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDhzfeg5IUDFQAAAAAdAAAAABAh" />
                <Markdown content={postDynamicContentExplainer} />
            </section>
            {/* !!cards?.length && <CardsGrid cards={cards} /> */}
        </main>
    );
}
function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }

}
