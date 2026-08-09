"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-2xl shadow-2xl">
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-gray-500 hover:text-gray-900 transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}
