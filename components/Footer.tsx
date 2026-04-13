import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center p-1 border border-white/20">
                                <img src="/LOGO.png" alt="VyorAI Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">VyorAI</span>
                        </Link>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                            The global AI infrastructure platform for building intelligent applications and automating complex workflows.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Products</h3>
                        <ul className="flex flex-col gap-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Virtual Try-On</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">AI Studio Catalog</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Stress Detection AI</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Omni-Engine (Soon)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Developers</h3>
                        <ul className="flex flex-col gap-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">API Platform</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">SDKs</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Company</h3>
                        <ul className="flex flex-col gap-3 text-sm text-gray-400">
                            <li><Link href="#about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} VyorAI. All rights reserved. Built in India.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Github"><Github className="w-5 h-5" /></Link>
                        <Link href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></Link>
                        <Link href="https://www.linkedin.com/company/vyorai/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
