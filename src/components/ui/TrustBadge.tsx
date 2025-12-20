import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

interface TrustBadgeProps {
    variant?: "secure-payment" | "verified-trip" | "satisfaction";
    className?: string;
}

export default function TrustBadge({ variant = "secure-payment", className = "" }: TrustBadgeProps) {
    const variants = {
        "secure-payment": {
            icon: Lock,
            title: "Secure Payment",
            desc: "256-bit SSL Encrypted",
            color: "text-green-600",
            bg: "bg-green-50 border-green-100"
        },
        "verified-trip": {
            icon: ShieldCheck,
            title: "Verified Trip",
            desc: "Vetted by Experts",
            color: "text-blue-600",
            bg: "bg-blue-50 border-blue-100"
        },
        "satisfaction": {
            icon: CheckCircle2,
            title: "Satisfaction Guarantee",
            desc: "24/7 Support",
            color: "text-purple-600",
            bg: "bg-purple-50 border-purple-100"
        }
    };

    const config = variants[variant];
    const Icon = config.icon;

    return (
        <div className={`flex items-center gap-3 px-4 py-2 rounded-lg border ${config.bg} ${className}`}>
            <Icon className={`w-5 h-5 ${config.color}`} />
            <div>
                <p className={`text-xs font-bold uppercase ${config.color}`}>{config.title}</p>
                <p className="text-xs text-gray-500 font-medium">{config.desc}</p>
            </div>
        </div>
    );
}
