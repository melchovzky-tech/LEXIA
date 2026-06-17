const lawyersMemory = [];

const createLawyer = (data) => {
  const {
    fullName,
    email,
    phone,
    professionalLicense,
    state,
    specialties,
    experienceYears
  } = data;

  if (!fullName || !email || !phone || !professionalLicense || !state) {
    return {
      success: false,
      statusCode: 400,
      message: "Faltan datos obligatorios para registrar al abogado"
    };
  }

  const existingLawyer = lawyersMemory.find(
    (lawyer) => lawyer.email === email || lawyer.professionalLicense === professionalLicense
  );

  if (existingLawyer) {
    return {
      success: false,
      statusCode: 409,
      message: "El abogado ya se encuentra registrado con ese correo o cédula profesional"
    };
  }

  const newLawyer = {
    id: `lawyer_${lawyersMemory.length + 1}`,
    fullName,
    email,
    phone,
    professionalLicense,
    state,
    specialties: specialties || [],
    experienceYears: experienceYears || 0,
    status: "activo",
    availability: "disponible",
    rating: 5,
    assignedCasesCount: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  lawyersMemory.push(newLawyer);

  return {
    success: true,
    statusCode: 201,
    message: "Abogado registrado correctamente",
    lawyer: newLawyer
  };
};

const getAvailableLawyers = () => {
  const availableLawyers = lawyersMemory.filter(
    (lawyer) => lawyer.status === "activo" && lawyer.availability === "disponible"
  );

  return {
    success: true,
    statusCode: 200,
    message: "Abogados disponibles obtenidos correctamente",
    total: availableLawyers.length,
    lawyers: availableLawyers
  };
};

const getLawyerById = (lawyerId) => {
  const foundLawyer = lawyersMemory.find((lawyer) => lawyer.id === lawyerId);

  if (!foundLawyer) {
    return {
      success: false,
      statusCode: 404,
      message: "Abogado no encontrado"
    };
  }

  return {
    success: true,
    statusCode: 200,
    message: "Abogado encontrado correctamente",
    lawyer: foundLawyer
  };
};

const updateLawyerAvailability = (lawyerId, data) => {
  const foundLawyer = lawyersMemory.find((lawyer) => lawyer.id === lawyerId);

  if (!foundLawyer) {
    return {
      success: false,
      statusCode: 404,
      message: "Abogado no encontrado"
    };
  }

  if (!data.availability) {
    return {
      success: false,
      statusCode: 400,
      message: "La disponibilidad del abogado es obligatoria"
    };
  }

  foundLawyer.availability = data.availability;
  foundLawyer.updatedAt = new Date().toISOString();

  return {
    success: true,
    statusCode: 200,
    message: "Disponibilidad del abogado actualizada correctamente",
    lawyer: foundLawyer
  };
};

const assignLawyerToCase = (caseId, data) => {
  const { lawyerId, assignmentReason } = data;

  if (!caseId) {
    return {
      success: false,
      statusCode: 400,
      message: "El ID del expediente es obligatorio"
    };
  }

  if (!lawyerId) {
    return {
      success: false,
      statusCode: 400,
      message: "El ID del abogado es obligatorio"
    };
  }

  const foundLawyer = lawyersMemory.find((lawyer) => lawyer.id === lawyerId);

  if (!foundLawyer) {
    return {
      success: false,
      statusCode: 404,
      message: "Abogado no encontrado"
    };
  }

  if (foundLawyer.status !== "activo") {
    return {
      success: false,
      statusCode: 400,
      message: "El abogado no se encuentra activo"
    };
  }

  if (foundLawyer.availability !== "disponible") {
    return {
      success: false,
      statusCode: 400,
      message: "El abogado no se encuentra disponible para asignación"
    };
  }

  foundLawyer.assignedCasesCount += 1;
  foundLawyer.availability = "asignado";
  foundLawyer.updatedAt = new Date().toISOString();

  const assignment = {
    id: `assignment_${Date.now()}`,
    caseId,
    lawyerId: foundLawyer.id,
    lawyerName: foundLawyer.fullName,
    lawyerEmail: foundLawyer.email,
    assignmentReason:
      assignmentReason || "Asignación preliminar realizada por LEX-IA CASE",
    status: "asignado",
    assignedAt: new Date().toISOString()
  };

  return {
    success: true,
    statusCode: 200,
    message: "Abogado asignado correctamente al expediente",
    assignment
  };
};

module.exports = {
  createLawyer,
  getAvailableLawyers,
  getLawyerById,
  updateLawyerAvailability,
  assignLawyerToCase
};
