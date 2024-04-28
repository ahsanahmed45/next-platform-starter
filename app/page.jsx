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
            </section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
            {/* !!cards?.length && <CardsGrid cards={cards} /> */}
        </main>
    );
}


}
