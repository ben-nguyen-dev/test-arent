import { link } from 'fs';
import React from 'react';

const footers = [
    {
        label: '会員登録',
        path: '/',
    },
    {
        label: '運営会社',
        path: '/',
    },
    {
        label: '利用規約',
        path: '/',
    },
    {
        label: '個人情報の取扱について',
        path: '/',
    },
    {
        label: '特定商取引法に基づく表記',
        path: '/',
    },
    {
        label: 'お問い合わせ',
        path: '/',
    },
];

function Footer() {
    return (
        <footer className="bg-midnight px-[160px] h-[128px] flex items-center">
            <nav>
                <ul className="flex">
                    {footers.map((footer, index) => (
                        <li
                            key={`${footer.label}-${index}`}
                            className="text-white cursor-pointer mr-[45px] hover:text-orange"
                        >
                            {footer.label}
                        </li>
                    ))}
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
