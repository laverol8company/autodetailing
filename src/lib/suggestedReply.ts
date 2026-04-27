export interface SuggestedReplyParams {
  clientName: string;
  car: string;
  service: string;
  packageLevel: string;
  preferredDate?: string;
}

export function generateSuggestedReply(params: SuggestedReplyParams): string {
  const dateStr = params.preferredDate ? ` on ${params.preferredDate}` : ' this week';
  const nameStr = params.clientName ? ` ${params.clientName}` : '';
  
  return `Hi${nameStr}, thanks for your request. Based on your ${params.car} and your interest in ${params.service}, I recommend our ${params.packageLevel} package. We can inspect the car${dateStr}.`;
}

export const followUpTemplates = [
  {
    title: "2-Hour Follow-up",
    text: "Hi {Name}, just confirming we received your detailing request. Let me know if you have any questions before we finalize an inspection slot!"
  },
  {
    title: "24-Hour Follow-up",
    text: "Hi {Name}, I'm following up on your {Service} estimate. Would you like to schedule a quick inspection call to confirm the details for your {Car}?"
  },
  {
    title: "3-Day Follow-up",
    text: "Hi {Name}, are you still interested in upgrading your {Car} with our {Service}? Our schedule for next week is filling up quickly."
  },
  {
    title: "Final Soft Reminder",
    text: "Hi {Name}, just sending a final note. If you decide to proceed with the {Service} in the future, we’d be happy to help protect your {Car}!"
  }
]
