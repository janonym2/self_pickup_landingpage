"use client"

import { useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";

export function ItemFrame() {
    const [quantity, setQuantity] = useState(4);
    const router = useRouter();

    const toArray = (max: number) => {
        const result = [...Array(max+1).keys()];
        result.shift();
        return result; // 1 , ..., max
    };
    
    const optionsArr = toArray(8);

    return (
        <div>
                <div className="p-4 flex flex-col items-center text-center space-y-4 max-w-sm mx-auto">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">Bierzeltgarnitur</h2>
                    
                    <Image 
                        src={'/images/bierzeltgarnitur.jpg'} 
                        alt={'Bierzeltgarnitur'} 
                        width={200} 
                        height={200} 
                        className="object-contain"
                    />
                    
                    <p className="text-sm">Ein Bierzeltgarnitur Set besteht aus 1 Tisch und 2 Bänken</p>
                    
                    <p className="text-sm">Preis: 12,00€</p>
                    
                    
                    <div className="w-full">
                        <label className="block text-sm mb-1" htmlFor="quantity">
                            Menge:
                        </label>
                    
                            <select
                                name="quantity"
                                value={quantity ?? ""}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="w-full bg-[var(--background)] border border-[#d6d6d6] p-2 focus:ring-2 focus:ring-[var(--accent)] outline-none"
                            >
                                {optionsArr.map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        
                    </div>
                    
                    <button
                        type="button"
                        onClick={() => {
                            if (typeof window.gtag !== "undefined") {
                            window.gtag('event', 'interesse_anfrage', {
                                quantity: quantity,
                                button_name: 'Jetzt anfragen'
                            });
                            }

                            router.push('/');
                        }}

                        className="text-white px-6 py-2 font-bold shadow transition bg-[var(--accent)] hover:bg-[var(--accent-2)]"
                    >
                        Jetzt anfragen
                    </button>
                </div>    
            
        </div>
    );

}