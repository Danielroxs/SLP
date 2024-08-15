import { useEffect } from "react";

const TallyForm = () => {
  useEffect(() => {
    // Carga del script de Tally después de que el componente se monte
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Elimina el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <iframe
        data-tally-src="https://tally.so/r/n9OJ5V?transparentBackground=1"
        width="100%"
        height="100%"
        title="HEALTH AND FITNESS QUESTIONNAIRE"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          border: 0,
        }}
      />
    </div>
  );
};

export default TallyForm;
