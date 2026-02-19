import React from 'react';
import { Timeline } from "@/components/ui/timeline";

const Education: React.FC = () => {
    const data = [
        {
            title: "2022 - 2025",
            content: (
                <div>
                    <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                        Diploma in Computer Science & Engineering
                    </h3>
                    <h4 className="text-xl text-[var(--accent-color)] mb-4">
                        DRIEMS Polytechnic, Cuttack
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-base">
                        Successfully completed with an aggregate of 81%.
                        Gained strong foundational knowledge in computer engineering principles and practical applications.
                    </p>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                        Matriculation
                    </h3>
                    <h4 className="text-xl text-[var(--accent-color)] mb-4">
                        Chhatia Government High School
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-base mb-4">
                        Completed secondary education with 75%.
                    </p>
                </div>
            ),
        }
    ];

    return (
        <section id="education" className="w-full">
            <Timeline data={data} />
        </section>
    );
};

export default Education;
