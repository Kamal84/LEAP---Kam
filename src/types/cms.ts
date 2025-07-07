export interface CMSHeroSection {
  id: string;
  type: 'hero';
  attributes: {
    background: {
      type: 'image';
      overlay: {
        color: string;
        enabled: boolean;
      };
    };
    content: {
      title: {
        text: string;
        style: {
          fontSize: string;
          color: string;
          fontWeight: string;
        };
      };
      subtitle: {
        text: string;
        style: {
          fontSize: string;
          color: string;
        };
      };
    };
  };
}

export interface CMSGridSection {
  id: string;
  type: 'grid';
  attributes: {
    layout: {
      columns: number;
      gap: string;
      padding: string;
    };
    items: Array<{
      id: string;
      content: {
        title: string;
        description: string;
        alignment: string;
        icon: string;
      };
    }>;
  };
}

export interface InputField {
  type: string;
  name: string;
  label: string;
  validation: {
    required: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
  styling: {
    className: string;
    placeholder: string;
  };
}

export interface CMSFormSection {
  id: string;
  type: 'form';
  attributes: {
    fields: Array<InputField>;
    submission: {
      endpoint: string;
      method: string;
      successMessage: string;
      errorMessage: string;
    };
  };
}

export type CMSSection = CMSHeroSection | CMSGridSection | CMSFormSection;