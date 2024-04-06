import { useRestActor } from "@bundly/ares-react";

export default function IcConnectPage() {
    const backend = useRestActor("backend");

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="index.txs"> Inicio</a></li>
                        <li><a href="Doc.tsx">Documentacion</a></li>
                        <li><a href="#"></a>ejemplo1</li>
                        <li><a href="#"></a>ejemplo2</li>
                    </ul>
                </nav>
            </header>
        
            <div className="container">
                <form action="#" method="post">
                    <fieldset>
                        <legend>INGRESA TUS DATOS</legend>
                        <table>
                            <tr>
                                <td><label htmlFor="nombre">NOMBRE:</label></td>
                                <td><input type="text" name="nombre" id="nombre" size= {45} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="direccion">DIRECCION</label></td>
                                <td><input type="text" name="direccion" id="direccion" size= {80} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="correo">CORREO</label></td>
                                <td><input type="email" name="correo" id="correo" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="telefono">TELEFONO</label></td>
                                <td><input type="tel" name="telefono" id="telefono" /></td>
                            </tr>
                            <tr>
                                <td>SEXO:</td>
                                <td>
                                    <input type="radio" id="masc" name="sexo" value="M" />
                                    <label htmlFor="masc">MASCULINO</label>
                                    <input type="radio" id="feme" name="sexo" value="F" />
                                    <label htmlFor="feme">FEMENINO</label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan= {2} ><input type="submit" value="enviar" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} /></td>
                            </tr>
                        </table>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}
