import styled from "styled-components";

const Button = (props) => {
  // Jak masz tylko 4 propy to może lepiej je destrukturyzować od razu przy deklaracji komponentu?
  // jedna linia kodu mniej
  const { activity, text, click, icon } = props;

  return (
    <ControlButton
      // Niezbyt podoba mi się przekazywanie dynamicznych klas jeżeli używamy styled-components
      // lepiej jest przekazać propsy do komponentu i na ich podstawie dynamicznie ustalać wartość atrybutu
      // dzięki takiemu podejściu nie musimy deklarować klas wewnątrz stylowanego komponentu i możemy trzymać się
      // podejścia, polegającego na stylowaniu tylko za pomocą SC, zamiast wykorzystywać natywne klasy CSS (dodatkowo unikamy zagnieżdżeń w SC)
      className={[
        activity ? "isDisabled" : "",
        text === "Start" ? "beginning" : "",
      ]}
      // zmieniłbym nazwę propa na disabled - wtedy każdy od razu wie co ten prop robi, często nie ma sensu zmieniać istniejących nazw propsów
      // przykładem może być onClick, disabled, className itp.
      disabled={activity}
      onClick={click}
    >
      {/* template string? Domyślam się, że to przez spację, ale może lepiej odsunąć od siebie tekst i ikonę za pomocą CSS niż stringa? */}
      {/* Swoją drogą - być może przekazanie propsa children zamiast osobno text i icon da nam większą swobodę tego, co chcemy wyświetlić w buttonie? */}
      {/* być może kiedyś będzie potrzeba (czysto teoretycznie) żeby utworzyć button bez ikonki, a wtedy musimy edytować komponent i jego propsy, zamiast po prostu
      przekazać inną wartość */}
      {`${text} `}
      {icon}
    </ControlButton>
  );
};

const ControlButton = styled.button`
  background-color: lightgray;
  &.isDisabled {
    pointer-events: none;
  }

  &.beginning:hover {
    background-color: rgb(255, 167, 65);
  }

  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export default Button;
