import { Experience } from "./components/experience";
import { Page } from "./components/page";
import { Pill } from "./components/pill";

export default function App() {
    return (
        <>
            <Page className="flex flex-col gap-2">
                <h1 className="text-2xl mx-auto border-b-4 pb-1 px-2 w-fit border-violet-300">
                    Anton Rodensjö
                </h1>
                <div>
                    Från Augusti 2021 till Maj 2022 studerade jag en kurs på
                    Högskolan i Gävle, det var en kurs i Psykologi för
                    personalvetare.
                </div>
                <div>
                    <h2 className="text-base font-semibold">Erfarenhet</h2>
                    <div className="flex flex-col divide-y divide-zinc-300">
                        <Experience
                            className="pb-4"
                            company="SkyTech AB"
                            title="Frontend utvecklare"
                            from={new Date("2024-04")}
                        >
                            Jag började som lärling och fick snabbt ansvar för
                            att självständigt utveckla en intern dashboard för
                            koncernen tillsammans med en projektledare. Gick
                            därefter vidare till att utveckla och underhålla ett
                            av koncernens företags hemsida, både frontend
                            (UI/UX), backend (API:er och databas) samt
                            visualisering av intern statistik.
                        </Experience>
                        <Experience
                            className="py-4"
                            company="Systembolaget"
                            title="Butiksmedarbetare, varugruppsansvarig"
                            from={new Date("2022-05")}
                            to={new Date("2024-04")}
                        >
                            Varugruppsansvaret var för tillfälligt sortiment med
                            utökat ansvar för beställningar och löpande
                            uppföljning av sortimentet, i nära dialog med
                            butikschef och kollegor för att säkerställa
                            tillgänglighet
                        </Experience>
                        <Experience
                            className="py-4"
                            company="TioHundra AB"
                            title="Personlig assistent"
                            from={new Date("2019-05")}
                            to={new Date("2021-08")}
                        >
                            Arbetsuppgifterna innebar att vara ett dagligt stöd
                            i brukarens vardag, inklusive personlig omvårdnad,
                            medicinering, kommunikation och hjälp vid
                            aktiviteter i och utanför hemmet.
                        </Experience>
                    </div>
                </div>
                <div>
                    <h2 className="text-base font-semibold mb-2">
                        Annan kunskap
                    </h2>
                    <div className="flex gap-2">
                        <Pill text="Linux" color="bg-orange-500" />
                        <Pill text="React" />
                        <Pill text="Typescript" color="bg-violet-500" />
                        <Pill text="C#" color="bg-blue-500" />
                        <Pill text="MySQL" color="bg-pink-500" />
                    </div>
                </div>
                <div>
                    <h2 className="text-base font-semibold mb-2">
                        Eftergymnasiala studier
                    </h2>
                    <div className="">
                        <div className="pb-2 mb-2 flex border-b">
                            Datateknik 1a{" "}
                            <span className="font-bold text-zinc-700 ml-auto">
                                Dec 2022 - Feb 2023
                            </span>
                        </div>
                        <div className="pb-2 mb-2 flex border-b">
                            Programmering 1{" "}
                            <span className="font-bold text-zinc-700 ml-auto">
                                Apr 2023 - Jun 2024
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-auto flex items-center justify-between overflow-hidden">
                    <div>
                        <h2 className="text-base font-bold">Kontakt</h2>
                        <div>072-253 57 50</div>
                        <div>anton.rodensjo@hotmail</div>
                    </div>
                    <img className="h-50" src="/anton.png" alt="" />
                </div>
            </Page>
        </>
    );
}
