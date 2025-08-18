const TeoriaComponente = ({comision, modulo}) => {
    return (
        <section>
            <h2>Componentes de react</h2>
            <p>Uno de los conceptos clave en React son los componentes. Un componente es una pieza reutilizable de la interfaz de usuario que se encarga de representar una parte especifica de la pantalla. Los componentes pueden ser tan simples como un boton o tan complejos como un formulario completo. React permite la creacion de componentes tanto de clase como funcionales, aunque los componentes funcionales se han vuelto mas populares con la introduccion de los Hooks. Cada componente en React puede tener su propio estado (state) y propiedades (props). El estado es una forma de almacenar y manejar datos internos del componente, mienstras qye las propiedades son datos que se pasan de un componente padre a un componente hijo. Al combinar estos elementos, React permite la creacion de interfaces interactivas, donde los cambios en los datos se reflejan automaticamente en la interfaz de usuario.</p>
            
            <div class="alert alert-primary" role="alert">
                Comision: {comision} Modulo: {modulo}
                </div>
        </section>
    );
};

export default TeoriaComponente;