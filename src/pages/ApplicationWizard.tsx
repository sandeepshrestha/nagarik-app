import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export default function ApplicationWizard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Submit logic
      navigate("/");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate(`/services/${id}`);
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="pl-0 hover:bg-transparent hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <span className="text-sm font-medium text-text-muted">
          Step {step} of {totalSteps}
        </span>
      </div>

      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className="absolute left-0 top-0 h-full bg-primary transition-all duration-300"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {step === 1 && "Personal Details"}
            {step === 2 && "Document Upload"}
            {step === 3 && "Review & Submit"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 1 && (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="Sandeep" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Shrestha" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  National ID Number
                </label>
                <Input placeholder="123-456-789" />
              </div>
            </>
          )}

          {step === 2 && (
            <div className="rounded-lg border-2 border-dashed border-gray-200 p-8 text-center">
              <p className="text-sm text-text-muted">
                Drag and drop your documents here, or click to browse.
              </p>
              <Button variant="outline" className="mt-4">
                Upload Files
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 rounded-lg bg-gray-50 p-4">
              <div className="flex items-center gap-3 text-green-600">
                <Check className="h-5 w-5" />
                <span className="font-medium">All details verified</span>
              </div>
              <p className="text-sm text-text-muted">
                By submitting this application, you confirm that all provided
                details are accurate.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleNext} className="w-full md:w-auto">
          {step === totalSteps ? "Submit Application" : "Continue"}
          {step !== totalSteps && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
