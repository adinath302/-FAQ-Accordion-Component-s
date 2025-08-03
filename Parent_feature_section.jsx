import React from 'react'
import Feature_section from './Feature_section';

const Parent_feature_section = () => {
    const features = [
        {
            id: 1,
            title: "Fast Performance",
            description: "Experience lightning-fast speed with optimized code.",
            icon: "⚡",
        },
        {
            id: 2,
            title: "Secure",
            description: "Top-notch security practices to keep your data safe.",
            icon: "🔒",
        },
        {
            id: 3,
            title: "Easy Integration",
            description: "Integrates seamlessly with your tools and workflow.",
            icon: "🔌",
        },
    ];

    return (
        <div>
            <Feature_section features={features} />
        </div>
    )
}

export default Parent_feature_section