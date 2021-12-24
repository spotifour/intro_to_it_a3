import Dropdown from './components/Dropdown/Dropdown';
import Container from './components/Container/Container';

export const convertTextDropdown = (data) => {
  const detailSubSections = Object.keys(data).map((subsection) => {
    const title = subsection.replaceAll("_", " ");
    const content = data[subsection].map((para) => {
      if (Array.isArray(para)) {
        return (
          <ul>
            {para.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        );
      }
      return <p>{para}</p>;
    });
    return <Dropdown title={title} content={content} />;
  });
  return detailSubSections;
};

export const convertTextContainer = (data) => {
  const result = Object.keys(data).map((subsection) => {
    const name = subsection.replaceAll("_", " ");
    const left = (
      <>
        {data[subsection].image}
        <h3>{name}</h3>
      </>
    );
    const right = data[subsection].text.map((para) => {
      if (Array.isArray(para)) {
        return (
          <ul>
            {para.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        );
      }
      return <p>{para}</p>;
    });
    return <Container left={left} right={right} />;
  });
  return result;
}
