import './App.css';
import styled from "styled-components";
import flash from './assets/flash.jpg';
import {useState} from "react";

const Window = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Head = styled.div`
    position: absolute;
    left: 10px;
    top: 10px;
`;

const Form = styled.div`
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    height: 230px;
    align-items: center;
`;

const Input = styled.select`
    width: 50%;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
`;

function App() {
    const [selectedMoney, setSelectedMoney] = useState("");
    const [selectedBody, setSelectedBody] = useState("");
    const [selectedConsumption, setSelectedConsumption] = useState("");
    const [selectedEngine, setSelectedEngine] = useState("");
    const [selectedPurpose, setSelectedPurpose] = useState("");
    const [result, setResult] = useState("");

    const arr1 = ['менее 1 млн руб.', 'более 1 млн руб.'];
    const arr2 = ['седан', 'внедорожник'];
    const arr3 = ['до 6 л', '6–10 л'];
    const arr4 = ['бензиновый', 'электрический'];
    const arr5 = ['город', 'загородные поездки'];

    // Правила
    const rules = [
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: 'до 6 л',
                engineType: 'бензиновый',
                purpose: 'город',
            },
            result: 'Hyundai Solaris',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: 'до 6 л',
                engineType: 'бензиновый',
                purpose: 'загородные поездки',
            },
            result: 'Kia Rio',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: '6–10 л',
                engineType: 'бензиновый',
                purpose: 'город',
            },
            result: 'Volkswagen Polo',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: '6–10 л',
                engineType: 'бензиновый',
                purpose: 'загородные поездки',
            },
            result: 'Renault Logan',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: 'до 6 л',
                engineType: 'электрический',
                purpose: 'город',
            },
            result: 'Nissan Leaf (б/у)',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: 'до 6 л',
                engineType: 'электрический',
                purpose: 'загородные поездки',
            },
            result: 'Chevrolet Bolt (б/у)',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: '6–10 л',
                engineType: 'бензиновый',
                purpose: 'город',
            },
            result: 'Renault Duster',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: '6–10 л',
                engineType: 'бензиновый',
                purpose: 'загородные поездки',
            },
            result: 'Lada Niva Travel',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: 'до 6 л',
                engineType: 'электрический',
                purpose: 'город',
            },
            result: 'Tesla Model 3',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: 'до 6 л',
                engineType: 'электрический',
                purpose: 'загородные поездки',
            },
            result: 'BMW i3',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: '6–10 л',
                engineType: 'бензиновый',
                purpose: 'город',
            },
            result: 'Toyota Camry',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: '6–10 л',
                engineType: 'бензиновый',
                purpose: 'загородные поездки',
            },
            result: 'Honda Accord',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: 'до 6 л',
                engineType: 'электрический',
                purpose: 'город',
            },
            result: 'Audi Q4 e-tron',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: 'до 6 л',
                engineType: 'электрический',
                purpose: 'загородные поездки',
            },
            result: 'Mercedes-Benz EQB',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: '6–10 л',
                engineType: 'бензиновый',
                purpose: 'город',
            },
            result: 'Mazda CX-5',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: '6–10 л',
                engineType: 'бензиновый',
                purpose: 'загородные поездки',
            },
            result: 'Toyota RAV4',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: 'до 6 л',
                engineType: 'электрический',
                purpose: 'город',
            },
            result: 'Nissan Leaf (б/у)',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: 'до 6 л',
                engineType: 'электрический',
                purpose: 'загородные поездки',
            },
            result: 'Chevrolet Bolt (б/у)',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: '6–10 л',
                engineType: 'электрический',
                purpose: 'город',
            },
            result: 'Renault Zoe (б/у)',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: '6–10 л',
                engineType: 'электрический',
                purpose: 'загородные поездки',
            },
            result: 'BMW i3 (б/у)',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: 'до 6 л',
                engineType: 'бензиновый',
                purpose: 'город',
            },
            result: 'Renault Duster (б/у)',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: 'до 6 л',
                engineType: 'бензиновый',
                purpose: 'загородные поездки',
            },
            result: 'Lada Niva Travel (б/у)',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: '6–10 л',
                engineType: 'электрический',
                purpose: 'город',
            },
            result: 'Hyundai Kona EV (б/у)',
        },
        {
            conditions: {
                budget: 'менее 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: '6–10 л',
                engineType: 'электрический',
                purpose: 'загородные поездки',
            },
            result: 'Volkswagen ID.4 (б/у)',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: 'до 6 л',
                engineType: 'бензиновый',
                purpose: 'город',
            },
            result: 'Hyundai Elantra',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: 'до 6 л',
                engineType: 'бензиновый',
                purpose: 'загородные поездки',
            },
            result: 'Mazda 6',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: '6–10 л',
                engineType: 'электрический',
                purpose: 'город',
            },
            result: 'Tesla Model S',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'седан',
                fuelConsumption: '6–10 л',
                engineType: 'электрический',
                purpose: 'загородные поездки',
            },
            result: 'Lucid Air',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: 'до 6 л',
                engineType: 'бензиновый',
                purpose: 'город',
            },
            result: 'Hyundai Tucson',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: 'до 6 л',
                engineType: 'бензиновый',
                purpose: 'загородные поездки',
            },
            result: 'Mazda CX-30',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: '6–10 л',
                engineType: 'электрический',
                purpose: 'город',
            },
            result: 'Audi e-tron',
        },
        {
            conditions: {
                budget: 'более 1 млн руб.',
                bodyType: 'внедорожник',
                fuelConsumption: '6–10 л',
                engineType: 'электрический',
                purpose: 'загородные поездки',
            },
            result: 'Jaguar I-PACE',
        }
    ];

    // Функция для обработки правил
    const handleRecommendation = () => {
        const match = rules.find(rule =>
            rule.conditions.budget === selectedMoney &&
            rule.conditions.bodyType === selectedBody &&
            rule.conditions.fuelConsumption === selectedConsumption &&
            rule.conditions.engineType === selectedEngine &&
            rule.conditions.purpose === selectedPurpose
        );
        if (match) {
            setResult(match.result);
        } else {
            setResult("Нет подходящего автомобиля");
        }
    };

    return (
        <>
            <Window>
                <div>
                    Экспертная система для выбора машины
                </div>
                <Form>
                    <Row>
                        <div>Ваш бюджет:</div>
                        <Input value={selectedMoney} onChange={(e) => setSelectedMoney(e.target.value)}>
                            <option value="">Выберите</option>
                            {arr1.map((value, index) => (
                                <option key={index} value={value}>{value}</option>
                            ))}
                        </Input>
                    </Row>

                    <Row>
                        <div>Тип кузова:</div>
                        <Input value={selectedBody} onChange={(e) => setSelectedBody(e.target.value)}>
                            <option value="">Выберите</option>
                            {arr2.map((value, index) => (
                                <option key={index} value={value}>{value}</option>
                            ))}
                        </Input>
                    </Row>

                    <Row>
                        <div>Расход топлива:</div>
                        <Input value={selectedConsumption} onChange={(e) => setSelectedConsumption(e.target.value)}>
                            <option value="">Выберите</option>
                            {arr3.map((value, index) => (
                                <option key={index} value={value}>{value}</option>
                            ))}
                        </Input>
                    </Row>

                    <Row>
                        <div>Тип двигателя:</div>
                        <Input value={selectedEngine} onChange={(e) => setSelectedEngine(e.target.value)}>
                            <option value="">Выберите</option>
                            {arr4.map((value, index) => (
                                <option key={index} value={value}>{value}</option>
                            ))}
                        </Input>
                    </Row>

                    <Row>
                        <div>Цель использования:</div>
                        <Input value={selectedPurpose} onChange={(e) => setSelectedPurpose(e.target.value)}>
                            <option value="">Выберите</option>
                            {arr5.map((value, index) => (
                                <option key={index} value={value}>{value}</option>
                            ))}
                        </Input>
                    </Row>
                    <button onClick={handleRecommendation} style={{ marginTop: "10px" }}>Подобрать автомобиль</button>
                </Form>
                <div>
                    Результат: {result}
                </div>
            </Window>
            <Head>
                <img height={80} width={120} src={flash} alt="Logo" />
            </Head>
        </>
    );
}

export default App;
