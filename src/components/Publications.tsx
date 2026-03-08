import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ChevronDown, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const publications = [
  {
    title: "Identification and Classification of Pneumonia Medical Condition using U-Net Algorithm",
    authors: "Kalaigar Abdul Muqeet, Kiran MC, Vasanthakumar GU",
    venue: "RCAAI 2025",
    publisher: "Taylor & Francis",
    year: "2025",
    status: "Accepted",
    abstract:
      "Pneumonia remains a leading cause of death worldwide, posing significant challenges to healthcare systems. This paper presents a U-Net model in conjunction with deep learning to automate classification and segmentation of diseased lung sections from X-ray images. The model is trained for pixel-wise segmentation, generating masks that accurately delineate lung regions affected by pneumonia. Performance metrics include Dice coefficient (0.76), IoU (0.62), and overall accuracy of 62.5%. Classification precision is 67% for normal cases and 60% for pneumonia patients.",
    keywords: ["Deep Learning", "Image Segmentation", "U-Net Architecture", "Pixel-wise Segmentation"],
    pdfUrl: "/papers/pneumonia-unet.docx",
  },
  {
    title: "Optical Character Recognition Assisted Automated Medication Prescription Reader System",
    authors: "Kalaigar Abdul Muqeet, Kiran MC, Vasanthakumar GU",
    venue: "RCAAI 2025",
    publisher: "Taylor & Francis",
    year: "2025",
    status: "Accepted",
    abstract:
      "This paper presents a web-based system that uses Google Vision API to extract medicine names, dosages, and frequencies from printed prescriptions. The system preprocesses prescription images with OpenCV, organizes extracted text with NLP and regex approaches. Features a pharmaceutical reminder system that alerts users about scheduled dosages and monitors medication supply. Future enhancements include AI-powered models for handwritten prescriptions and intelligent scheduling systems.",
    keywords: ["Google Vision API", "OCR", "Prescription Recognition", "Reinforcement Learning"],
    pdfUrl: "/papers/ocr-prescription.pdf",
  },
];

const PublicationCard = ({ pub, index }: { pub: typeof publications[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all"
      >
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground leading-snug mb-2">
              {pub.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-sm font-medium text-primary">{pub.venue}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{pub.publisher}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{pub.year}</span>
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent/10 text-accent">
                {pub.status}
              </span>
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-secondary/50 rounded-md p-4 mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">Abstract</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pub.abstract}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {pub.keywords.map((kw) => (
                      <span key={kw} className="px-2 py-0.5 text-xs rounded border border-border text-muted-foreground">
                        {kw}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                {expanded ? "Hide abstract" : "Show abstract"}
                <ChevronDown className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
              </button>

              <Button variant="outline" size="sm" onClick={() => setPdfOpen(true)} className="text-xs">
                <FileText className="h-3 w-3 mr-1" />
                Preview Paper
              </Button>
            </div>
          </div>
        </div>
      </motion.article>

      <Dialog open={pdfOpen} onOpenChange={setPdfOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh]">
          <DialogHeader>
            <DialogTitle className="text-base pr-8">{pub.title}</DialogTitle>
            <DialogDescription>{pub.authors} — {pub.venue} {pub.year}</DialogDescription>
          </DialogHeader>
          <div className="w-full h-[60vh] bg-muted rounded-md flex items-center justify-center">
            <div className="text-center space-y-3">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-sm text-muted-foreground">Paper preview</p>
              <Button asChild variant="outline" size="sm">
                <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Open Full Paper
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Publications = () => {
  return (
    <section id="publications" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Publications</h2>
          <div className="h-1 w-16 bg-primary mb-4" />
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Peer-reviewed research contributions in medical AI, computer vision, and intelligent systems.
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <PublicationCard key={pub.title} pub={pub} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
