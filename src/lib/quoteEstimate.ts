export interface QuoteEstimateParams {
  serviceType: string;
  vehicleSize: 'Small' | 'Medium' | 'Large' | 'Extra Large';
  condition: 'Low' | 'Medium' | 'High';
  packageLevel: 'Essential' | 'Premium' | 'Signature';
}

export interface QuoteEstimateResult {
  estimatedPriceRange: string;
  estimatedDuration: string;
  note: string;
}

export function calculateQuoteEstimate(params: QuoteEstimateParams): QuoteEstimateResult {
  let basePrice = 0;
  let durationHours = 0;

  // Base logic by service
  switch (params.serviceType) {
    case 'Exterior Detailing':
      basePrice = 100;
      durationHours = 2;
      break;
    case 'Interior Detailing':
      basePrice = 150;
      durationHours = 3;
      break;
    case 'Ceramic Coating':
      basePrice = 500;
      durationHours = 8;
      break;
    case 'Paint Correction':
      basePrice = 300;
      durationHours = 6;
      break;
    case 'PPF':
      basePrice = 800;
      durationHours = 12;
      break;
    default:
      basePrice = 100;
      durationHours = 2;
  }

  // Multiplier by vehicle size
  const sizeMultipliers = {
    'Small': 1,
    'Medium': 1.2,
    'Large': 1.5,
    'Extra Large': 1.8,
  };
  basePrice *= sizeMultipliers[params.vehicleSize] || 1;
  durationHours *= sizeMultipliers[params.vehicleSize] || 1;

  // Multiplier by condition
  const conditionMultipliers = {
    'Low': 1,
    'Medium': 1.2,
    'High': 1.5,
  };
  basePrice *= conditionMultipliers[params.condition] || 1;
  durationHours *= conditionMultipliers[params.condition] || 1;

  // Package Level Logic
  const packageMultipliers = {
    'Essential': 1,
    'Premium': 1.5,
    'Signature': 2,
  };
  basePrice *= packageMultipliers[params.packageLevel] || 1;
  durationHours *= packageMultipliers[params.packageLevel] || 1;

  const minRange = Math.floor(basePrice * 0.9);
  const maxRange = Math.ceil(basePrice * 1.2);

  return {
    estimatedPriceRange: `€${minRange} – €${maxRange}`,
    estimatedDuration: `${Math.ceil(durationHours)} – ${Math.ceil(durationHours * 1.2)} hours`,
    note: "Final quote after vehicle inspection."
  };
}
