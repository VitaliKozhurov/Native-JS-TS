// импортируем контекст
import { createContext, useContext, useState } from "react";

// создаем контекст, с дефолтным значением
const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

export const UseContext = () => {
    // useContext предназначен для чтения контекста
    // контекст это данные, которые видны на всем протяжении дерева компонентов от родителя до последнего ребенка
    // отпадает необходимость передавать пропсы, на любом уровне можно обратиться к контексту напрямую
    const [theme, setTheme] = useState<string>("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <WrappedComponent />
        </ThemeContext.Provider>
    );
};

const WrappedComponent = () => {
    const { theme, toggleTheme } = useContext<{
        theme: string;
        toggleTheme: () => void;
    }>(ThemeContext);
    return (
        <div>
            <h1>It is wrapped component with context</h1>
            <h2>My context: {theme}</h2>
            <div>
                <button onClick={toggleTheme}>Change context</button>
            </div>
        </div>
    );
};
