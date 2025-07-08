export const useSubmitForm = () => {
  const submitForm = async (data: Record<string, string>) => {
    try {
      const response = await fetch("/api/contactable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Form submission result:", result);
      return {
        success: response.ok,
      };
    } catch (err) {
      console.error("Form submission error:", err);
      throw err;
    }
  };

  return { submitForm };
};
