'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  messageLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  productLabel: string;
  messagePlaceholder: string;
  submitText: string;
  successMessage: string;
  products: Array<{ value: string; label: string }>;
}

export default function ContactForm({
  title,
  subtitle,
  nameLabel,
  emailLabel,
  phoneLabel,
  messageLabel,
  namePlaceholder,
  emailPlaceholder,
  phonePlaceholder,
  productLabel,
  messagePlaceholder,
  submitText,
  successMessage,
  products,
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Netlify will handle the form submission
    // Show success message after form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 100);
  };

  if (isSubmitted) {
    return (
      <Card className="mx-auto w-full max-w-2xl">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <CheckCircle className="mb-4 h-16 w-16 text-primary" />
          <h3 className="mb-2 text-2xl font-bold">{successMessage}</h3>
          <p className="text-muted-foreground">
            We'll get back to you as soon as possible.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Contact Information */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
          <p className="mt-2 text-muted-foreground">{subtitle}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">vaga@maak-corp.tn</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-muted-foreground">+216 93 864 380</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-sm text-muted-foreground">Avenue Yasser Arafet, Sahloul 1, Sousse 4054</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Send us a message</CardTitle>
          <CardDescription>
            Fill out the form below and we'll get back to you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Netlify form detection */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field for spam protection */}
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  {nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={namePlaceholder}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={emailPlaceholder}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                {phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={phonePlaceholder}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="product" className="text-sm font-medium">
                {productLabel}
              </label>
              <select
                id="product"
                name="product"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select a product</option>
                {products.map((product) => (
                  <option key={product.value} value={product.value}>
                    {product.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                {messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={messagePlaceholder}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              {submitText}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
