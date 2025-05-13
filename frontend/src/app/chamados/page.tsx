import Link from 'next/link'

const chamados = [
    { id: 1, titulo: 'Dúvida em equações', materia: 'Matemática', status: 'Pendente' },
    { id: 2, titulo: 'Revolução Francesa', materia: 'História', status: 'Em andamento' },
    { id: 3, titulo: 'Fotosíntese', materia: 'Biologia', status: 'Resolvido' },
]

export default function ChamadosPage() {
    return (
        <div className="min-h-screen p-6">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Meus Chamados</h1>
                <p className="text-gray-600">Visualize e gerencie seus chamados</p>
            </header>

            <div className="mb-6">
                <Link
                    href="/novo-chamado"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Novo Chamado
                </Link>
            </div>

            <div className="space-y-4">
                {chamados.map((chamado) => (
                    <div key={chamado.id} className="bg-white p-4 rounded-lg shadow">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="font-medium text-lg text-gray-800">{chamado.titulo}</h2>
                                <p className="text-gray-600">{chamado.materia}</p>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                                chamado.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800' :
                                    chamado.status === 'Em andamento' ? 'bg-blue-100 text-blue-800' :
                                        'bg-green-100 text-green-800'
                            }`}>
                {chamado.status}
              </span>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Link
                                href={`/chamados/${chamado.id}`}
                                className="text-sm text-blue-600 hover:text-blue-500"
                            >
                                Ver detalhes →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}