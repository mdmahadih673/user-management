import { use } from "react";

const UserCardPage = ({ userPromise }) => {
    const users = use(userPromise);

    return (
        <div className="min-h-screen bg-slate-100 px-6 py-12">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-8 text-3xl font-bold text-slate-800">
                    Users <span className="text-blue-600">({users.length})</span>
                </h1>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {users.map((user) => (
                        <div
                            key={user.email}
                            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                                    {user.name?.charAt(0)?.toUpperCase()}
                                </div>

                                <div className="min-w-0">
                                    <h2 className="truncate text-lg font-bold text-slate-800">
                                        {user.name}
                                    </h2>
                                    <p className="text-sm text-green-600">
                                        ● Active User
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3 border-t border-slate-100 pt-4">
                                <div>
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                        Email Address
                                    </p>
                                    <p className="break-all text-sm text-slate-600">
                                        {user.email}
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                        User ID
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        {user.id}
                                    </p>
                                </div>
                            </div>

                            <button className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700">
                                View Profile →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserCardPage;