interface RequirementsTabProps {
    requirements: string;
}

export default function RequirementsTab({ requirements }: RequirementsTabProps) {
    return (
        <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Requirements & Information</h3>
            <div className="prose prose-gray max-w-none text-gray-600 bg-gray-50 p-8 rounded-2xl">
                {/* Render markdown or text content */}
                <div className="whitespace-pre-wrap">{requirements}</div>
            </div>
        </div>
    );
}
