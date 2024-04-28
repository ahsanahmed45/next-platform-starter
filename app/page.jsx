import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';


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
 
 
 <h2 className="mb-0">Objectives of the Performance Management Process</h2>
Emirates Airlines considers that putting a robust performance management system in place is essential to materializing its strategic goals and remaining in the lead in the aeronautics sector. The primary objectives of the performance management process include: The primary objectives of the performance management process include:
-	Enhancing Employee Performance: The aim of the performance management process is to position and align the employees so that they can perform well in their functions, through setting clear performance standards, providing timely feedback and creating route for skills development and career advancement.
-	Aligning Individual and Corporate Goals: Through setting SMART goals (i.e. specific, measurable, achievable, relevant and time-bound goals) the performance management system guarantees its employees objectives complement the strategic targets of the company and thus facilitates the development of a culture of accountability and goal attainment.
-	Identifying Training and Development Needs: An approach that enables Emirates to measure employees' performance during the year and give the required feedback is performance appraisal. This way, the organization becomes in a position to identify the strengths and areas of improvement of its employees, and hence, provides employees with training programs, which aid to improve their skills and competencies (Vide et al., 2023).
-	Rewarding and Recognizing Performance: It is the role of the performance management process to ensure equal and fair acknowledgement of the timeline workers’ contributions. The process is thus assisting in rewarding merit, granting employee incentives and granting opportunity for career advancements; thereby encouraging a culture of performance excellence and enthusing employees (Murphy, 2020).

<h2 className="mb-0">HR Department Overview</h2>
The Human Resources (HR) department at Emirates Airlines is the key contributor to the company's capability to attract, grow and retain the top performing employees, aiming to meet the goals of the company, its constantly increasing internally and externally. The primary task of the HR Department is to conduct recruitment, to train, to monitor performances, to maintain relationship with staff members, and also for the organizational development (Na Nan et al., 2020).
The roles provided by the HR department are as under,
•	Recruitment and Talent Acquisition: Together with the Human Resources (HR) team, it defines recruitment strategy, delivers its implementation, and performs job interviews in the direction of choosing candidates who possess the laid- down values of the Emirates airline and match its requirements. They provide counselling to new employees at every onset of the employment contract.
•	Training and Development: HRM explains the training programs that enable employee to gain skills, knowledge, and competencies. They provide means for professional development, and help each individual in attaining their personal goals.
•	Performance Management: HR department undertakes the responsibility of the performance management process, consisting of setting goals, conducting performance evaluations, and establishing the specific means of feedback. They work hand in glove with managers to implement competence-based evaluations of performance and identify unique problems and solutions (Baird et al., 2020).
•	Employee Relations: Human resources play the role of joining employees and their managers with the objective of successful resolution of complaints, conflicts and disciplinary actions for the employees in an impartial fashion. A healthy organization strives to maintain a positive workplace atmosphere and guarantee good employee morale and loyalty.
•	Compensation and Benefits: HR works on developing and implementing compensation and benefits plans: salary schemes, incentives, health insurance, bonuses, and other benefits with the primary goal of keeping the employees motivated. Their provision of competitive compensation plans helps in the recruitment and retention of the best talent (Dangol, 2021).
•	HR Policy Development: Human resources (HR) team develop and disseminate HR policies, procedures, and guidelines to make applied labour law and regulations compliant. Additionally, they render the function of the company's grievance officer to the managers and employees for HR-related matters (Rehman et al., 2021).


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
                 <p className="text-lg">Aisha, Mohammed Salman, Sultan Taher,  Sultan Alhajri</p>
                 
                
</section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <img src="https://c.ekstatic.net/ecl/aircraft-exterior/boeing-777/boeing-777-300er-flying-in-sunny-blue-sky-t1024x480.jpg" />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <img src="https://c.ekstatic.net/ecl/aircraft-exterior/boeing-777/emirates-boeing-777-sun-setting-down-w768x256.jpg" />
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
