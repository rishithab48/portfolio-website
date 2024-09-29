export function EmailTemplate({ subject, message }) {
    return (
      <>
        <h1>{subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>{message}</p>
      </>
    );
  }
  