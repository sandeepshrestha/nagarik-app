import { DocumentCard } from "@/components/features/DocumentCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Documents() {
  const { t } = useLanguage();

  const documents = [
    {
      title: "Citizenship Certificate",
      idNumber: "27-01-74-12345",
      issueDate: "2074/05/12",
      type: "citizenship" as const,
    },
    {
      title: "Driving License",
      idNumber: "01-02-00123456",
      issueDate: "2023/01/15",
      type: "license" as const,
    },
    {
      title: "PAN Card",
      idNumber: "123456789",
      issueDate: "2075/02/20",
      type: "pan" as const,
    },
    {
      title: "Voter ID",
      idNumber: "987654321",
      issueDate: "2070/11/05",
      type: "voter" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-text-main">
          {t("myDocuments")}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
          <DocumentCard key={doc.idNumber} {...doc} />
        ))}
      </div>
    </div>
  );
}
