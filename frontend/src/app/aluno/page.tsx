"use client";
import { useState } from 'react';
import Link from 'next/link';
import ChamadoCard from '@/components/ChamadoCard';

export default function AlunoHomePage() {
    const [chamados] = useState([
        { id: 1, titulo: 'Dúvida em equações', materia: 'Ensino Médio', status: 'PENDENTE' },
        { id: 2, titulo: 'Quem foi Rousseau?', materia: 'Historia', status: 'EM_ANDAMENTO' },
        { id: 3, titulo: 'Revolução e data', materia: 'Historia', status: 'RESOLVIDO' },
    ]);

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">DuoEstudo</h1>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="flex justify-end mb-6">
                        <Link
                            href="/aluno/novo-chamado"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                        >
                            Criar Chamado
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {chamados.map((chamado) => (
                            <ChamadoCard key={chamado.id} chamado={chamado} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}