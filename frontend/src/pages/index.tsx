import { AuthButton, useRestActor } from "@bundly/ares-react";

export default function IcConnectPage() {
    const backend = useRestActor("backend");

    return (
        <div>
            <header>
                <img src="/img/Imagen de WhatsApp 2024-04-05 a las 12.08.55_8db349eb.jpg" alt="Logo" style={{ position: 'absolute', top: '0', left: '0', width: '38px', height: 'auto' }} />
                <nav>
                    <ul>
                        <li><a href="#"></a> Inicio</li>
                    </ul>
                </nav>
            </header>
            <div className="container" style={{ textAlign: 'center' }}> {/* Alinea al centro */}
                <h1>Nosotros somos Eco Guardians</h1>
                <h3>Hemos desarrollado un sensor que mida los niveles de nitrógeno (N), fósforo (P) y potasio (K) en el suelo y, en función de las lecturas, cree un fertilizante personalizado que se adapte a las necesidades específicas del suelo</h3>
                <h4>Información general del sensor</h4>
                <table border={1}>
                    <tbody>
                        <tr>
                        <td><strong>Nutrientes</strong></td>
                            <td><strong>Nitrógeno (N)</strong></td>
                            <td><strong>Fósforo (P)</strong></td>
                            <td><strong>Potasio (K)</strong></td>
                        </tr>
                        <tr>
                        <td><strong>Nutrientes base de tierra sin fertilizante</strong></td>
                        <td>160 mg/kg</td>
                        <td>46 mg/kg</td>
                        <td>66 mg/kg</td>
                        </tr>
                    </tbody>
                </table><br></br><br></br>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td><strong>Nutrientes</strong></td>
                            <td><strong>Nitrógeno (N)</strong></td>
                            <td><strong>Fósforo (P)</strong></td>
                            <td><strong>Potasio (K)</strong></td>
                            
                        </tr>
                        <tr>
                            <td><strong>Minuto 1</strong></td>
                        <td>200 mg/kg</td>
                        <td>190 mg/kg</td>
                        <td>188 mg/kg</td>
                        </tr>
                        <tr>
                        <td><strong>Minuto 2</strong></td>
                            <td>201 mg/kg</td>
                            <td>190 mg/kg</td>
                            <td>189 mg/kg</td>
                        </tr>
                        <tr>
                        <td><strong>Minuto 3</strong></td>
                            <td>204 mg/kg</td>
                            <td>193 mg/kg</td>
                            <td>192 mg/kg</td>
                        </tr>
                        <tr>
                        <td><strong>Minuto 4</strong></td>
                            <td>207 mg/kg</td>
                            <td>197 mg/kg</td>
                            <td>195 mg/kg</td>
                        </tr>
                        <tr>
                        <td><strong>Minuto 5</strong></td>
                            <td>211 mg/kg</td>
                            <td>201 mg/kg</td>
                            <td>199 mg/kg</td>
                        </tr>
                        <tr>
                        <td><strong>Minuto 6</strong></td>
                            <td>214 mg/kg</td>
                            <td>205 mg/kg</td>
                            <td>204 mg/kg</td>
                        </tr>
                        <tr>
                        <td><strong>Minuto 7</strong></td>
                            <td>217 mg/kg</td>
                            <td>209 mg/kg</td>
                            <td>209 mg/kg</td>
                        </tr>
                        <tr>
                        <td><strong>Minuto 8</strong></td>
                            <td>221 mg/kg</td>
                            <td>213 mg/kg</td>
                            <td>214 mg/kg</td>
                        </tr>
                        <tr>
                        <td><strong>Minuto 9</strong></td>
                            <td>224 mg/kg</td>
                            <td>217 mg/kg</td>
                            <td>218 mg/kg</td>
                        </tr>
                        <tr>
                        <td><strong>Minuto 10</strong></td>
                            <td>226 mg/kg</td>
                            <td>220 mg/kg</td>
                            <td>222 mg/kg</td>
                        </tr>
                    </tbody>
                </table><br></br><br></br>
                <div>
                    <h1>Vamos a la Block</h1>
                    <AuthButton />
                </div>
            </div>
        </div>  
    );
}