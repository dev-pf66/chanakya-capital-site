import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-8 py-10 border-t border-[#E0D9CE] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <span className="font-['Playfair_Display'] text-base text-[#0A0A0A]">Chanakya Capital</span>
      <div className="flex items-center gap-6 text-sm text-[#6B6B6B]">
        <Link href="/for-founders" className="hover:text-[#0A0A0A] transition-colors">For Founders</Link>
        <Link href="/what-we-look-for" className="hover:text-[#0A0A0A] transition-colors">What We Look For</Link>
        <Link href="/contact" className="hover:text-[#0A0A0A] transition-colors">Contact</Link>
        <a href="https://linkedin.com/in/devlikesbizness" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A0A0A] transition-colors">LinkedIn</a>
        <a href="https://instagram.com/devlikesbizness" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A0A0A] transition-colors">Instagram</a>
        <a href="https://youtube.com/@devlikesbizness" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A0A0A] transition-colors">YouTube</a>
      </div>
      <span className="text-sm text-[#6B6B6B]">Mumbai, India</span>
    </footer>
  );
}
