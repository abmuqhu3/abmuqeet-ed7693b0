import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ChevronDown, Download, BookOpen, Eye } from "lucide-react";
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
    title: "A Real-Time Driver Drowsiness and Attention Warning System Using Adaptive Facial Landmark Analysis and Hierarchical Alert Architecture",
    authors: "Kalaigar Abdul Muqeet, Dr. Rajalakshmi",
    venue: "Conference Paper",
    institution: "TiHAN, IIT Hyderabad",
    year: "2025",
    status: "Submitted",
    abstract:
      "We present DDAWS, a lightweight, camera-only framework that fuses per-driver adaptive calibration with six concurrent physiological cues — Eye Aspect Ratio (EAR), Mouth Aspect Ratio (MAR), PERCLOS, estimated Karolinska Sleepiness Scale (KSS), and 3-D head-pose yaw and pitch — under a two-tier hierarchical alert scheme with explicit state recovery. The pipeline runs on a standard CPU at under 5 ms per frame with no GPU and no pre-trained weights. Tested on 23 participants across 63,544 frames (35.3 min), DDAWS achieved a mean Detection Rate of 79.09%, Alert Precision of 72.09%, Gaze Consistency of 85.83%, and a Composite System Score of 69.67%.",
    keywords: ["Driver Drowsiness Detection", "PERCLOS", "Eye Aspect Ratio", "MediaPipe FaceMesh", "Karolinska Sleepiness Scale", "Adaptive Calibration", "Real-time Safety Systems"],
    pdfUrl: "/papers/ddaws-conference.pdf",
    isPdf: true,
  },
  {
    title: "Identification and Classification of Pneumonia Medical Condition using U-Net Algorithm",
    authors: "Kalaigar Abdul Muqeet, Kiran MC, Vasanthakumar GU",
    venue: "RCAAI 2025",
    institution: "Taylor & Francis",
    year: "2025",
    status: "Accepted",
    abstract:
      "Pneumonia remains a leading cause of death worldwide. This paper presents a U-Net model in conjunction with deep learning to automate classification and segmentation of diseased lung sections from X-ray images. The model is trained for pixel-wise segmentation, generating masks that accurately delineate lung regions affected by pneumonia. Performance metrics include Dice coefficient (0.76), IoU (0.62), and classification accuracy of 89%.",
    keywords: ["Deep Learning", "Image Segmentation", "U-Net Architecture", "Pixel-wise Segmentation"],
    pdfUrl: "/papers/pneumonia-unet.docx",
    isPdf: false,
  },
  {
    title: "Optical Character Recognition Assisted Automated Medication Prescription Reader System",
    authors: "Kalaigar Abdul Muqeet, Kiran MC, Vasanthakumar GU",
    venue: "RCAAI 2025",
    institution: "Taylor & Francis",
    year: "2025",
    status: "Accepted",
    abstract:
      "This paper presents a web-based system that uses Google Vision API to extract medicine names, dosages, and frequencies from printed prescriptions. The system preprocesses prescription images with OpenCV, organizes extracted text with NLP and regex approaches. Features a pharmaceutical reminder system that alerts users about scheduled dosages and monitors medication supply.",
    keywords: ["Google Vision API", "OCR", "Prescription Recognition", "NLP", "Reinforcement Learning"],
    pdfUrl: "/papers/ocr-prescription.docx",
    isPdf: false,
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
        className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
      >
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1 border border-primary/20">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-foreground leading-snug mb-2 hover:text-primary transition-colors">
              {pub.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-1 font-mono text-xs">{pub.authors}</p>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-mono font-semibold text-primary">{pub.venue}</span>
              <span className="text-muted-foreground text-xs">•</span>
              <span className="text-xs text-muted-foreground">{pub.institution}</span>
              <span className="text-muted-foreground text-xs">•</span>
              <span className="text-xs text-muted-foreground font-mono">{pub.year}</span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-primary/10 text-primary border border-primary/20">
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
                  <div className="bg-secondary/50 rounded-md p-4 mb-3 border border-border">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-2">Abstract</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pub.abstract}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {pub.keywords.map((kw) => (
                      <span key={kw} className="px-2 py-0.5 text-[11px] font-mono rounded border border-border text-muted-foreground">
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* Embedded PDF Preview */}
                  {pub.isPdf && (
                    <div className="mb-3 rounded-md overflow-hidden border border-border bg-muted">
                      <div className="flex items-center justify-between px-3 py-2 bg-secondary/80 border-b border-border">
                        <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">Paper Preview</span>
                      </div>
                      <iframe
                        src={pub.pdfUrl}
                        className="w-full h-[400px]"
                        title={`Preview: ${pub.title}`}
                      />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 text-sm font-mono text-primary hover:underline"
              >
                {expanded ? "collapse()" : "expand()"}
                <ChevronDown className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
              </button>

              {pub.isPdf && (
                <Button variant="outline" size="sm" onClick={() => setPdfOpen(true)} className="text-xs font-mono border-primary/30 hover:border-primary/60">
                  <Eye className="h-3 w-3 mr-1" />
                  Preview PDF
                </Button>
              )}

              <Button variant="outline" size="sm" asChild className="text-xs font-mono border-primary/30 hover:border-primary/60">
                <a href={pub.pdfUrl} download>
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.article>

      {pub.isPdf && (
        <Dialog open={pdfOpen} onOpenChange={setPdfOpen}>
          <DialogContent className="max-w-5xl max-h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-sm pr-8 font-mono">{pub.title}</DialogTitle>
              <DialogDescription className="font-mono text-xs">{pub.authors} — {pub.venue} {pub.year}</DialogDescription>
            </DialogHeader>
            <div className="w-full h-[70vh] bg-muted rounded-md overflow-hidden border border-border">
              <iframe
                src={pub.pdfUrl}
                className="w-full h-full"
                title={`Full Preview: ${pub.title}`}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

const Publications = () => {
  return (
    <section id="publications" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-primary/50" />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary">Publications</span>
            </h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl text-sm">
            Peer-reviewed research in driver safety systems, medical AI, computer vision, and intelligent systems.
          </p>
        </motion.div>

        <div className="space-y-5">
          {publications.map((pub, i) => (
            <PublicationCard key={pub.title} pub={pub} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
